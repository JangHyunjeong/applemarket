<template>
  <form action="">
    <AttachPhoto />
    <InputGroup />
  </form>
</template>

<script>
import AttachPhoto from "../components/AttachPhoto.vue";
import InputGroup from "../components/InputGroup.vue";

export default {
  name: "ProductWrite",
  components: {
    AttachPhoto,
    InputGroup,
  },
};
</script>
