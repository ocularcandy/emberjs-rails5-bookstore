import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  shouldReloadRecord() {
    // prevent eager loading of an author
    return false;
  },
  shouldBackgroundReloadRecord(store, snapshot) {
    console.log(" .. calling shouldBackgroundReloadRecord");
    const loadedAt = snapshot.record.get('loadedAt');

    // if it was loaded more than an hour ago
    if(Date.now() - loadedAt > 3600000) {
      return true;
    }
    else {
      return false;
    }
  }
});
