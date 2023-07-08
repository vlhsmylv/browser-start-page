function frequently_used_fnc() {
  let arr = [];

  for (let frequently_used_el of frequently_used) {
    arr.push(/*html*/ `
    <a 
      target="_blank" 
      href="${frequently_used_el.href}" 
      title="${frequently_used_el.title}" 
      class="bg-slate-600 text-gray-400 hover:text-gray-100 rounded-lg p-3 flex flex-row items-center gap-3 ease-in-out duration-200">
      <div class="w-14 flex justify-center align-center">
        <img class="${frequently_used_el.class}" src="./img/${frequently_used_el.icon}" />
      </div> 
      <div class="w-full text-xl">${frequently_used_el.title}</div>
    </a>
    `);
  }

  return arr;
}
