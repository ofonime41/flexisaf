<template>

    <nav class="bg-gradient-to-r from-[#05224B] to-[#070852] shadow md:flex md:center md:justify-between">
        <div class="container mx-auto py-5">
            <div class="flex justify-between items-center px-10 md:px-20">
                <a href="#">
                    <div class="flex text-lg text-bold">

                        <span> <img class="w-7" src="@/assets/images/logo.png" alt="logo"> </span>
                        <span class="px-2 text-2xl font-bold text-white">
                            flexisaf
                        </span>
                    </div>
                </a>

                <!-- Hamburger Icon -->
                <button id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                    <span class="hamburger-top text-white"></span>
                    <span class="hamburger-middle"></span>
                    <span class="hamburger-bottom"></span>
                </button>

                 <ul id="menu"
                class="md:bg-none bg-gradient-to-r from-[#05224B] to-[#070852] hidden  min-h-full md:flex md:items-center space-x-4 space-y-4 md:space-y-0 md:z-auto z-[1] md:static absolute text-white  w-full left-0 md:w-auto py-4 md:py-0 pl-7 md:pl-0 md:opacity-100  top-[70px] transition-all ease-in duration-500">
                <li class="mx-4 my-4"><a href="" class="text-lg hover:text-cyan-500 duration-500 ">Company</a></li>
                <li><a href="" class="text-lg hover:text-cyan-500 duration-500">Product</a></li>
                <li><a href="" class="text-lg hover:text-cyan-500 duration-500">Careers</a></li>
            

                <button class="bg-[#F4A641] text-white  spec-btn  px-4 py-2 mx-4 duration-500 font-bold  hover:bg-cyan-600">
                    Contact Us
                </button>
            </ul>
            </div>

           

        </div>

    </nav>


</template>

<script>
export default {

    name: 'NavBar',
    mounted: function() {
     this.hambugerMenu();
  },

  methods:{
    hambugerMenu(){
    const btn = document.getElementById('menu-btn');
    const menu=document.getElementById('menu');
    btn.addEventListener('click',()=>{  
        btn.classList.toggle('open')
          menu.classList.toggle('hidden')
    })
    }
  }

}

</script>

<style scoped >
nav{
     font-family: 'Poppins', sans-serif;
}

/* Hamburger Menu */
.hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
    position: relative;
    
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #fff;
    transform: rotate(0);
    transition: all 0.5s;
}

.hamburger-middle {
    transform: translateY(7px);
}

.hamburger-bottom {
    transform: translateY(14px);
}

.open {
    transform: rotate(90deg);
    transform: translateY(0px);
}

.open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
}

.open .hamburger-middle {
    display: none;
}

.open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
}

</style>