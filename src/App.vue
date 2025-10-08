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
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <!-- <HelloWorld msg="did it!" /> -->
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
      <ArrayChangeDetection />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
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
