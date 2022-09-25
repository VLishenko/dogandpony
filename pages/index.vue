<script setup>
	import OfficeForm from '../components/officeForm.vue';
	import OfficeCard from '../components/officeCard.vue';
</script>

<template>
	<div class="pb-20">

		<div class="flex items-center justify-center border-t-2 border-blue bg-white h-[80px] w-full absolute top-0 left-0">
			<div class="flex items-center justify-center">
				<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-blue mr-5">
					<path d="M1 7L5 11L15 1" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

				<span class="uppercase text-xs">The locaton has been updated.</span>
			</div>

			<a 
				href="javascript:;" 
				class="inline-flex items-center justify-center transition-all w-[60px] h-full absolute top-0 right-0 hover:opacity-70"
			>
				<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-blue">
					<path d="M1.16406 13L13.4928 1L1.16406 13ZM1.16406 1L13.4928 13L1.16406 1Z" fill="inherit"/>
					<path d="M1.16406 1L13.4928 13M1.16406 13L13.4928 1L1.16406 13Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</a>
		</div>	

		<section class="w-80 m-auto mt-40">
			<h1 class="text-6xl text-center text-blue font-light">Offices</h1>

			<OfficeForm></OfficeForm>

			<OfficeCard></OfficeCard>

			<OfficeCard></OfficeCard>

			<OfficeCard></OfficeCard>
		</section>
		
	</div>
</template>
