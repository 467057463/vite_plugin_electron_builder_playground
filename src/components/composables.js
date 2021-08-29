import { ref, computed } from 'vue';

export default function composables(){
  const count = ref('0')
  const countTow = computed (() => {
    return count.value * 2
  })

  function changeCount(value){
    count.value = value
  }
  return {
    count,
    countTow,
    changeCount
  }
}
