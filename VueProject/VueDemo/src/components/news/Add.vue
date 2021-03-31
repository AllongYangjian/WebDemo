<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input
          type="text"
          class="form-control"
          v-model="item.name"
          placeholder="用户名"
        />
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea
          class="form-control"
          rows="6"
          v-model="item.content"
          placeholder="评论内容"
        ></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <!-- <button type="button" @click="$emit('commit',{...item})" class="btn btn-default pull-right">提交</button> -->
          <button type="button" @click="add" class="btn btn-default pull-right">
            提交
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    addComments: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      item: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    add: function () {
      this.addComments({ ...this.item });
      this.item.name = "";
      this.item.content = "";
    }
  }
}
</script>

<style></style>
