<template>
  <div>
   <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add/>
        <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
import Add from './Add'
import List from './List'
export default {
  data (){
    return {
      comments:[
        {name:'XXX说',content:'React不错'},
        {name:'YYY说',content:'React So easy'},
        {name:'ZZZ说',content:'React So Hard'}
      ]       
    }
  },
  components:{
    Add,List
  }
}
</script>

<style>

</style>
