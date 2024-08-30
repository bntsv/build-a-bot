<template>
  <div class="content" v-if="partsStore.parts">

    <div class="preview">
      <CollapsableSection>
        <template v-slot:collapse>&#x25B2; Hide</template>
        <template v-slot:expand>&#x25BC; Show</template>
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.imageUrl" alt='headPreview'/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.imageUrl" class="rotate-left" alt='leftArmPreview'/>
            <img :src="selectedRobot.torso.imageUrl" alt='torsoPreview'/>
            <img :src="selectedRobot.rightArm.imageUrl" class="rotate-right" alt='rightArmPreview'/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.imageUrl" alt='basePreview'/>
          </div>
        </div>
      </CollapsableSection>
      <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
    </div>

    <div class="top-row">
      <div class="robot-name">{{ selectedRobot.head.title }}
        <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
      </div>
      <PartSelector
        :parts="partsStore.parts.heads"
        @partSelected="part => selectedRobot.head=part"
        position="top"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="partsStore.parts.arms"
        position="left"
        @partSelected="part => selectedRobot.leftArm=part"
      />
      <PartSelector
        :parts="partsStore.parts.torsos"
        position="center"
        @partSelected="part => selectedRobot.torso=part"
      />
      <PartSelector
        :parts="partsStore.parts.arms"
        position="right"
        @partSelected="part => selectedRobot.rightArm=part"
      />
    </div>
    <div class="bottom-row">
      <PartSelector
        :parts="partsStore.parts.bases"
        position="bottom"
        @partSelected="part => selectedRobot.base=part"
      />
    </div>
  </div>
</template>

<script>
// import parts from "../data/parts";
// import { toCurrency } from "../shared/formatters";

// function getNextValidIndex(index, length) {
//   const incrementedIndex = index + 1;
//   return incrementedIndex > length - 1 ? 0 : incrementedIndex;
// }

// function getPrevValidIndex(index, length) {
//   const deprecatedIndex = index - 1;
//   return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
// }

// export default {
//   name: "RobotBuilder",
//   data() {
//     return {
//       availableParts: parts,
//       selectedHeadIndex: 0,
//       selectedTorsoIndex: 0,
//       selectedLeftArmIndex: 0,
//       selectedRightArmIndex: 0,
//       selectedBaseIndex: 0,
//       cart: [],
//     };
//   },
//   computed: {
//     selectedRobot() {
//       return {
//         head: this.availableParts.heads[this.selectedHeadIndex],
//         torso: this.availableParts.torsos[this.selectedTorsoIndex],
//         leftArm: this.availableParts.arms[this.selectedLeftArmIndex],
//         rightArm: this.availableParts.arms[this.selectedRightArmIndex],
//         base: this.availableParts.bases[this.selectedBaseIndex],
//       };
//     },
//   },
//   methods: {
//     addToCart() {
//       const robot = this.selectedRobot;
//       const cost = robot.head.cost +
//       robot.base.cost +
//       robot.leftArm.cost +
//       robot.rightArm.cost +
//       robot.torso.cost;

//       this.cart.push({ ...robot, cost });
//     },
//     toCurrency,
//     selectNextHead() {
//       this.selectedHeadIndex = getNextValidIndex(
//         this.selectedHeadIndex,
//         this.availableParts.heads.length,
//       );
//     },
//     selectPrevHead() {
//       this.selectedHeadIndex = getPrevValidIndex(
//         this.selectedHeadIndex,
//         this.availableParts.heads.length,
//       );
//     },
//     selectNextTorso() {
//       this.selectedTorsoIndex = getNextValidIndex(
//         this.selectedTorsoIndex,
//         this.availableParts.torsos.length,
//       );
//     },
//     selectPrevTorso() {
//       this.selectedTorsoIndex = getPrevValidIndex(
//         this.selectedTorsoIndex,
//         this.availableParts.torsos.length,
//       );
//     },
//     selectNextLeftArm() {
//       this.selectedLeftArmIndex = getNextValidIndex(
//         this.selectedLeftArmIndex,
//         this.availableParts.arms.length,
//       );
//     },
//     selectPrevLeftArm() {
//       this.selectedLeftArmIndex = getPrevValidIndex(
//         this.selectedLeftArmIndex,
//         this.availableParts.arms.length,
//       );
//     },
//     selectNextRightArm() {
//       this.selectedRightArmIndex = getNextValidIndex(
//         this.selectedRightArmIndex,
//         this.availableParts.arms.length,
//       );
//     },
//     selectPrevRightArm() {
//       this.selectedRightArmIndex = getPrevValidIndex(
//         this.selectedRightArmIndex,
//         this.availableParts.arms.length,
//       );
//     },
//     selectNextBase() {
//       this.selectedBaseIndex = getNextValidIndex(
//         this.selectedBaseIndex,
//         this.availableParts.bases.length,
//       );
//     },
//     selectPrevBase() {
//       this.selectedBaseIndex = getPrevValidIndex(
//         this.selectedBaseIndex,
//         this.availableParts.bases.length,
//       );
//     },
//   },
// };
// </script>

<script setup>
import { useCartStore } from "@/stores/cartStore";
import { usePartsStore } from "@/stores/partsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import PartSelector from "./PartSelector.vue";
import CollapsableSection from "../shared/CollapsableSection.vue";

const { cart } = storeToRefs(useCartStore());

const partsStore = usePartsStore();
partsStore.getParts();

const selectedRobot = ref({
  head: {},
  torso: {},
  leftArm: {},
  rightArm: {},
  base: {},
});
// const saleBorderClass = computed(() => (selectedRobot.value.head.onSale ? "sale-border" : ""));

const addToCart = () => {
  const robot = selectedRobot.value;
  const cost = robot.head.cost +
  robot.base.cost +
  robot.leftArm.cost +
  robot.rightArm.cost +
  robot.torso.cost;

  cart.value.push({ ...robot, cost });
};

</script>

<style scoped>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.sale-border {
  border-color: red;
}

.part img {
  width: 200px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}

.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color:red;
}

.content {
  position: relative;
}

.add-to-cart {
  position: absolute;
  width: 310px;
  padding: 3px;
  font-size: 16px;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 310px;
  height: 310px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 70px;
  height: 70px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}

th,td{
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>
