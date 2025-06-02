<main>
    <slot> <!-- så att "main" i +page.svelte syns -->
      
    </slot>
  </main>

<div class="backdrop"></div> <!-- bakgrunden  -->

<style>
    .backdrop { /*  funktionalitet7styling bakgrunden*/
      width: 100vw;
      height: 100vh;
      background-color: antiquewhite;
      background-position: center;
      background-size: cover;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
</style>