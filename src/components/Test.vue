<style lang="scss" scoped>

</style>

<template>
  <div>

  </div>
</template>

<script>
import merge from 'utils/merge';
import { toObject, getValueByPath, getPropByPath } from 'utils/util';
export default {
  created() {
    const obj = {
      name: 'dzh'
    };
    merge(obj, { age: 88 }, { city: 'tianjin' });
    console.log('objMerge', obj);
    const arr = [
      {
        name: 'dzh'
      },
      {
        age: 89,
        city: 'tianjin'
      }
    ];
    const obj2 = toObject(arr);
    console.log('toObject', obj2);
    const obj3 = {
      person1: {
        state: {
          age: 78,
          gerder: '男',
          name: 'dzh'
        }
      },
      person2: {
        state: {
          name: 'bob',
          gerder: '女',
          age: 12
        }
      }
    };
    let value = getValueByPath(obj3, 'person1.state.name');
    console.log('value', value);
    console.log('getPropByPath', getPropByPath(obj3, '[person1][state][name]', false));
  }
}
</script>
