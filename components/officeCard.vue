<script setup>
	import { ref } from 'vue';
    const isOpen = ref(false);

    function accordionToggle() {
        isOpen.value = !isOpen.value;
    }
</script>

<template>
    <div class="accordion mt-6" :class="{'is-open':isOpen}">
        <div class="accordion-header" @click="accordionToggle">
            <h4 class="accordion-header-title">Headquarters</h4>
            <p class="accordion-header-text">3763 W. Dallas St.</p>

            <svg width="36" height="36" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="accordion-header-ic">
                <path d="M1 1L9 9L17 1" stroke-linecap="round" stroke-linejoin="round" class="stroke-inherit"/>
            </svg>
        </div>

        <div class="accordion-body">
            <div class="pb-4 border-b border-light-grey">
                <div class="text-xl font-bold">Hellena John</div>
                <div class="mt-2">Software Tester</div>

                <a 
                    href="mailto:georgia.young@example.com" 
                    class="inline-block mt-2 text-blue text-ellipsis w-full overflow-hidden"
                >
                    georgia.young@example.com
                </a>

                <div class="mt-2">(808) 555-0111</div>
            </div>

            <div class="flex align-middle justify-between mt-3">
                <a href="javascript:;" class="inline-flex items-center py-1 hover:opacity-80" title="Edit">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-grey mr-3">
                        <path d="M13.232 3.23199L16.768 6.76799M14.732 1.73199C15.2009 1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991 1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003 3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5 19.036H1V15.464L14.732 1.73199Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span class="text-grey text-inherit uppercase text-xs">Edit</span>
                </a>

                <a href="javascript:;" class="inline-flex items-center py-1 hover:opacity-80" title="Delete">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-red mr-3">
                        <path d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span class="text-red uppercase text-xs">Delete</span>
                </a>
            </div>
        </div>
        
    </div>
</template>
