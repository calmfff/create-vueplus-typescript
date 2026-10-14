<script lang="ts" setup>
import { request } from '@/utils/request';

interface TestItem {
    a: number;
    b: number;
}

const list = ref<TestItem[]>([]);

async function getList() {
    list.value = await request.get<Record<string, never>, TestItem[]>('/test');
}

onMounted(() => {
    getList();
});
</script>

<template>
    <div class="flex h-screen w-full items-center justify-center">
        <h1>Home</h1>
        <div v-for="(item, index) in list" :key="index">
            <h1>{{ item.a }}---{{ item.b }}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
