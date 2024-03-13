import axios from 'axios';
import { reactive, onMounted } from 'vue';

export default function () {
  let dogList = reactive(
    [
      'https://images.dog.ceo//breeds//pembroke//n02113023_6548.jpg'
    ]
  )

  async function getdog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  onMounted(() => {
    getdog()
  })
  return { dogList, getdog }
}