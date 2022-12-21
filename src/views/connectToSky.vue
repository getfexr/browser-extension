<template>
  <div
    class="w-full h-full max-w-sm p-4 bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <form class="space-y-6" action="#">
      <div>
        <label
          for="ip"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your node's IP address</label
        >
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder="xxx.xxx.xxx.xxx"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        Request access
      </button>
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?
        <a
          href="https://getfexr.com"
          class="text-teal-700 hover:underline dark:text-teal-500"
          target="_blank"
          >Know more</a
        >
      </div>
    </form>
  </div>
</template>
