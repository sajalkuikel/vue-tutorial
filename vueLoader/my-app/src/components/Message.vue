<template>
  <div class="msg-box">
    <p>
        <slot></slot>
    </p>
  </div>

</template>


<script>
  export default {

  }

</script>



<style>
  .msg-box{
    background: gray;
    padding: 10px;
    border: 1px solid darkslateblue;
    margin-bottom: 5px;
  }
</style>
