<template>

<div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
  
    <div id="nav">
        Im a header
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |

    </div>

</template>