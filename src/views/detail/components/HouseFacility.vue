<template>
  <BlockHeader title="房屋设施" more-text="查看全部设施">
    <div class="facility">
      <template v-for="(item, i) in sortFacility" :key="i">
        <div class="item">
          <div class="head">
            <img :src="item.icon" alt="" />
            <div class="name">{{ item.groupName }}</div>
          </div>
          <div class="list">
            <template v-for="(tile, j) in item.facilitys.slice(0, 4)" :key="j">
              <div class="tile">
                <van-icon class="icon" name="passed" color="green" />
                <span class="name">{{ tile.name }}</span>
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </BlockHeader>
</template>

<script setup>
import { computed } from "vue";
import BlockHeader from "@/components/block-header/BlockHeader.vue";
const props = defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
});

const sortFacility = computed(() => {
  const { houseFacilitys, facilitySort } = props.houseFacility;

  if (!facilitySort) return [];
  // let sortedFacility = [];
  // for (const groupId of facilitySort) {
  //   let append = houseFacilitys.find((item) => item.groupId == groupId);
  //   if (append) {
  //     sortedFacility.push(append);
  //   }
  // }
  let sortedFacility = houseFacilitys
    .filter((item) => facilitySort.includes(item.groupId))
    .sort(
      (a, b) =>
        facilitySort.indexOf(a.groupId) - facilitySort.includes(b.groupId)
    );

  return sortedFacility;
});
</script>

<style lang="less" scoped>
.facility {
  background: #fafafa;
  padding: 12px 0;
  border-radius: 6px;
  border-bottom: 1px solid #e6e6e6;

  .item {
    display: flex;
    margin: 12px 0;

    .head {
      width: 90px;
      text-align: center;

      img {
        width: 20px;
        height: 20px;
      }

      .name {
        color: #444;
        margin-top: 5px;
        font-size: 14px;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 13px;

      .tile {
        display: flex;
        align-items: center;
        width: 50%;
        margin: 6px 0;
      }

      .icon {
        margin: 0 6px;
      }

      .name {
        color: #444;
      }
    }
  }
}
</style>
