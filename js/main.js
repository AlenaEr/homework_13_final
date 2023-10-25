 const tabs = document.querySelectorAll('.tabs a');

 const teamTabsItems = document.querySelectorAll('.team-tabs-item');

 tabs.forEach((tab, index) => {
   tab.addEventListener('click', (event) => {
	 event.preventDefault();

	 teamTabsItems.forEach((item) => {
	   item.classList.remove('active');
	 });

	 teamTabsItems[index].classList.add('active');
   });
 });
