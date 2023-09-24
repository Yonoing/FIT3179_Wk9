try {
	const vg_1 = "bank_branches_per_capita.vg.json"; 
	const chart = await vegaEmbed("#bar_chart", vg_1); 
	
} catch (e) {
	console.error(e); 
}
