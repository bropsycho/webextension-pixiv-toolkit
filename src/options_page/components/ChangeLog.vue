<template>
  <div class="change-log">
    <div class="change-log__content"
      v-for="(changeLog ,i) in updateList"
      :key="i"
    >
      <div class="change-log__title">{{ changeLog.version }}</div>
      <ul class="change-log__list">
        <li
          v-for="(item, j) in changeLog.list"
          :key="j"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SuperMixin from '@/mixins/SuperMixin';
import histories from '@/statics/histories.json';

export default {
  mixins: [ SuperMixin ],

  data() {
    return {
      loading: true,
      updateList: null
    }
  },

  mounted() {
    this.loadHistory().then(() => {
      this.loading = false;
    });
  },

  methods: {
    formatResult(result) {
      let updateList = [];
      let updates = result.trim().split(/(\r\n{2}|\r{2}|\n{2})/g);

      updates.forEach(update => {
        update = update.trim();

        if (update !== '') {
          let _update = update.split(/[\r\n|\r|\n]/g);

          updateList.push({
            version: _update.shift(),
            list: _update
          });
        }
      });

      this.updateList = updateList;
    },

    loadHistory () {
      return new Promise(resolve => {
        let language = browser.i18n.getUILanguage();
        let history = '';

        if (histories.indexOf(history) < 0) {
          history = 'en-US';
        }

        let xhr = new XMLHttpRequest();

        xhr.open('GET', browser.runtime.getURL(`HISTORY_${history}`));

        xhr.onload = event => {
          resolve(this.formatResult(xhr.responseText));
        };

        xhr.send();
      });
    }
  }
}
</script>
