<template>
<div  class="fixed top-0 left-0 z-40 w-[379px] h-screen bg-green-900" >
   <div class="h-full px-[31px] py-[57px] overflow-y-auto">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="#" class="flex items-center p-2 mt-[18px] w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">              
               <span class="pi pi-users text-[40px]"></span>
               <span class="ms-3 text-white text-xl"><RouterLink to="/">Usuarios</RouterLink></span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 mt-[18px] w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">
               <span class="pi pi-book text-[40px]"></span>
               <span class="flex-1 ms-3 whitespace-nowrap text-xl"><RouterLink to="/about">Livros</RouterLink></span>
            </a>
         </li>
         <li>
           <a href="#" class="flex items-center p-2 mt-[18px] w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">
               <span class="pi pi-bookmark text-[40px]"></span>
               <span class="flex-1 ms-3 whitespace-nowrap text-xl">Emprestimo</span>              
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 mt-[18px]  w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">
               <span class="pi pi-th-large text-[40px]"></span>
               <span class="flex-1 ms-3 whitespace-nowrap text-xl">Estoque</span>
            </a>
         </li>
         <li>
           <a href="#" class="flex items-center p-2 mt-[18px] w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">
               <span class="pi pi-check-square text-[40px]"></span>               
               <span class="flex-1 ms-3 whitespace-nowrap text-xl">Reserva</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 mt-[18px]  w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">
               <span class="pi pi-list text-[40px]"></span>    
               <span class="flex-1 ms-3 whitespace-nowrap text-xl">Categorias</span>
            </a>
         </li>  
         <li>
            <a href="#" class="flex items-center mt-[385px] p-2 w-[316px] h-16 text-white rounded-lg hover:bg-green-500 group">
               <span class="pi pi-power-off text-[40px]"></span>    
               <span class="flex-1 ms-3 whitespace-nowrap text-xl">Logout</span>
            </a>
         </li>       
      </ul>
   </div>   
</div>
</template>
