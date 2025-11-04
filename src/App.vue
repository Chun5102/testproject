<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import RefCount from './components/RefCount.vue'
import ReactiveComp from './components/ReactiveComp.vue'
import ChangColor from './components/ChangColor.vue'
import ComputedAndMethod from './components/ComputedAndMethod.vue'
import ShppingCar from './components/ShppingCar.vue'
import DisableComputed from './components/DisableComputed.vue'
import TermsAgreement from './components/TermsAgreement.vue'
import VbindStyle from './components/VbindStyle.vue'
import VbindClass from './components/VbindClass.vue'
import VifDemo from './components/VifDemo.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ConditionalRenderingReactive from './components/ConditionalRenderingReactive.vue'
import VifVshowDiff from './components/VifVshowDiff.vue'
import VforObject from './components/VforObject.vue'
import ProductList from './components/ProductList.vue'
import ArrayChangeDetection from './components/ArrayChangeDetection.vue'
import ProductManager from './components/ProductManager.vue'
import VonClick from './components/VonClick.vue'
import VonInput from './components/VonInput.vue'
import VonkeyEvent from './components/VonkeyEvent.vue'
import VmodelDemo from './components/VmodelDemo.vue'
import VmodelDemo2 from './components/VmodelDemo2.vue'
import OnMounted from './components/OnMounted.vue'
import OnUnmounted from './components/OnUnmounted.vue'
import onUpdated from './components/onUpdated.vue'
import RefComponent from './components/RefComponent.vue'
import ParentComponent from './components/ParentComponent.vue'
import WatchRef from './components/WatchRef.vue'
import WatchDeepAndMutiValues from './components/WatchDeepAndMutiValues.vue'
import WatchEffectComp from './components/WatchEffectComp.vue'
import TabComponent from './components/is/TabComponent.vue'
import RegisterRunDown from './components/is/RegisterRunDown.vue'
import PropsComp from './components/PropsComp.vue'
import ProductPage from './components/ProductPage.vue'
import FancyButton from './components/slot/FancyButton.vue'
import BaseLayout from './components/slot/BaseLayout.vue'
import TabBar from './components/slot/TabBar.vue'
import TabBarP from './components/slot/TabBarP.vue'
import UserData from './components/slot/UserData.vue'
import ProvideInjectRef from './components/components/ProvideInjectRef.vue'
import TopBar from './components/TopBar.vue'
import AxiosComp from './components/AxiosComp.vue'

import useFormat from './components/composables/useFormat'
import { ref } from 'vue'
import { formatPrice } from './components/utils/format'

const show = ref(false)

function open() {
  show.value = true
}

const btns = [
  { text: '取消', color: 'secondary', onClick: () => onCancel() },
  { text: '確認刪除', color: 'danger', onClick: () => onDelete() },
]

function onCancel() {
  console.log('使用者取消了')
}
function onDelete() {
  console.log('刪除成功')
}

const price = useFormat().$fmPrice(1000, 3)
console.log('🚀 ~ price:', price)
const date = useFormat().$formatDate(new Date())
console.log('🚀 ~ date:', date)
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="did it!" /> -->
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
    <!-- <RefCount /> -->
    <!-- <ReactiveComp /> -->
    <!-- <ChangColor /> -->
    <!-- <ComputedAndMethod /> -->
    <!-- <ShppingCar /> -->
    <!-- <DisableComputed /> -->
    <!-- <TermsAgreement /> -->
    <!-- <VbindStyle /> -->
    <!-- <VbindClass /> -->
    <!-- <VifDemo /> -->
    <!-- <ConditionalRendering /> -->
    <!-- <ConditionalRenderingReactive /> -->
    <!-- <VifVshowDiff /> -->
    <!-- <VforObject /> -->
    <!-- <ProductList /> -->
    <!-- <ArrayChangeDetection /> -->
    <!-- <ProductManager /> -->
    <!-- <VonClick /> -->
    <!-- <VonInput /> -->
    <!-- <VonkeyEvent /> -->
    <!-- <VmodelDemo /> -->
    <!-- <VmodelDemo2 /> -->
    <!-- <OnMounted /> -->
    <!-- <OnUnmounted /> -->
    <!-- <onUpdated /> -->
    <!-- <RefComponent /> -->
    <!-- <ParentComponent /> -->
    <!-- <WatchRef /> -->
    <!-- <WatchDeepAndMutiValues /> -->
    <!-- <WatchEffectComp /> -->
    <!-- <TabComponent /> -->
    <!-- <RegisterRunDown /> -->
    <!-- <button @click="open">開啟AlertBox</button>

    <AlertBox
      v-model:visible="show"
      :title="'刪除確認'"
      :message="'確定要刪除這筆資料嗎？'"
      :buttons="btns"
      :size="'small'"
      :autoClose="false"
    /> -->
    <!-- <PropsComp :propA="'A'" :propG="'success'" :propH="() => {}" :disabled="true" /> -->
    <!-- <ProductPage /> -->
    <!-- <FancyButton><template v-slot:default>click me</template></FancyButton>
    <FancyButton><template #default>click me</template></FancyButton>
    <FancyButton>click me</FancyButton> -->
    <!-- <BaseLayout>
      <template #header><h1>Here might be a page title</h1></template>
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template #footer><p>Here's some contact info</p></template>
    </BaseLayout> -->
    <!-- <TabBar /> -->
    <!-- <TabBarP /> -->
    <!-- <UserData /> -->
    <!-- <ProvideInjectRef /> -->
    <!-- {{ $formatDate(new Date()) }}<br />
    {{ formatPrice(1000, 0, '$') }} -->
    <div>
      <TopBar class="app-container" />
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column; /* 頁面佈局為垂直方向 */
}

router-view {
  flex-grow: 1; /* 讓 <router-view /> 占滿剩餘空間 */
  padding: 20px; /* 給內容一點內邊距 */
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
