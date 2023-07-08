const toastHTML = {
  success: (message) => {
    return /*html*/ `
        <div id="success-toast" class="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
        <div class="flex p-4 items-center text-green-600">
            <i class="fa-solid fa-check"></i>
        <div class="ml-3">
            <p class="text-md text-gray-700 dark:text-gray-400">
                ${message}
            </p>
        </div>
        </div>
        </div>`;
  },
  info: (message) => {
    return /* html */ `
    <div id="info-toast" class="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div class="flex p-4 items-center text-blue-600">
        <i class="fa-solid fa-circle-info"></i>
    <div class="ml-3">
      <p class="text-sm text-gray-700 dark:text-gray-400">
        ${message}
      </p>
    </div>
  </div>
</div>
    `;
  },
  error: (message) => {
    return /* html */ `
    <div id="error-toast" class="max-w-xs bg-white border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div class="flex p-4 items-center text-blue-600">
    <i class="fa-solid fa-circle-xmark"></i>
    <div class="ml-3">
      <p class="text-sm text-gray-700 dark:text-gray-400">
        ${message}
      </p>
    </div>
  </div>
</div>
    `;
  }
};

function cleanToast(el) {
  setTimeout(() => {
    $(el).remove();
  }, 3000);
}

const toast = {
  success: (message) => {
    $("#toast").append(toastHTML.success(message));
    cleanToast("#success-toast");
  },
  info: (message) => {
    $("#toast").append(toastHTML.info(message));
    cleanToast("#info-toast");
  },
  error: (message) => {
    $("#toast").append(toastHTML.error(message));
    cleanToast("#error-toast");
  }
};
