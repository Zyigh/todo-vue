<template>
    <div class="form-modal">
        <div class="clearfix">
            <button class="btn btn-light m-4 float-right" @click="closeModal">X</button>
        </div>
        <div class="row">
            <div class="col-6 offset-3">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
    div.form-modal {
        position: absolute;
        z-index: 8;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.2);
    }
</style>