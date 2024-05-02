<template>
  <div>Perfil do usuário</div>
  <canvas id="canvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import * as skinview3d from 'skinview3d'

onMounted(() => {
  let viewer = new skinview3d.SkinViewer({
    canvas: document.getElementById('canvas'),
    width: 300,
    height: 400,
    skin: 'https://mineskin.eu/skin/Brun0XP'
  })
  viewer.animation = new skinview3d.IdleAnimation()
})
</script>
