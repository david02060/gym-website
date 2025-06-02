<main>
    <slot> <!-- gör så att man kan se genom objekt från +page.svetle  -->
      
    </slot>
  </main>

<div class="backdrop"></div> <!-- bakgrunden  -->

<style>
    .backdrop { /* styling/funktionalitet bakgrund */
      width: 100vw;
      height: 100vh;
      background-color: gray;
      background-size: cover;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
</style>