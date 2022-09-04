<template>
    <Listbox as="div"  v-model="$i18n.locale">
      
      <ListboxLabel class="block text-sm font-medium text-gray-700">Language</ListboxLabel>
      <div class="relative mt-1">
        <ListboxButton class="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm">
          <span class="flex items-center">
           
            <span class="ml-3 block truncate">{{ $i18n.locale }}</span>
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
  
        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption  as="template"  v-for="locale in $i18n.availableLocales" :key="locale" :value="locale" v-slot="{ active, selected }">
              <li :class="[selected ? 'text-white bg-red-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                <div class="flex items-center">
                  <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ locale }}</span>
                </div>
  
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

  const selected = ref('en')

  </script>