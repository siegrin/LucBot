var vapor = require('..')

test('should flip text', function (t) {
  t.equal(vapor('Hello, World!'), 'Ｈｅｌｌｏ， Ｗｏｒｌｄ！ \'Ｈｅｌｌｏ， Ｗｏｒｌｄ！', 'text is vapored')
  t.end()
})

test('should be reversible', function (t) {
  t.equal(vapor(vapor('Hello, World!')), 'Hello, World!')
  t.end()
})