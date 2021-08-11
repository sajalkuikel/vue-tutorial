Vue.component('modal' , {
    template: `
            <div class="modal is-active" >
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">

                    <slot name="header"></slot>           <!-- named slot -->
                  </p>
                  <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
<!--                    default slot-->
                    <slot></slot>   
                </section>
                <footer class="modal-card-foot">
                     <slot name="footer"> <!-- named slot -->
<!--                     this is the default content that is visible only if no values are passed in the slot named footer-->
                        <button class="button is-success">OK</button>                 
                    </slot>     
                </footer>
              </div>
            </div>    
    `
});

new Vue({
    el : '#root',
});
