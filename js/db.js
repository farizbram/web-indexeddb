var dbPromised = idb.open("news-reader", 1, function(upgradeDb) {
  var articlesObjectStore = upgradeDb.createObjectStore("articles", {
    keyPath: "id"
  });
  articlesObjectStore.createIndex("post_title", "post_title", { unique: false });
});
