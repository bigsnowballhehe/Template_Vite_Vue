import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import SnTable from '../SnTable.vue'

describe('SnTable.vue', () => {
  const columns = {
    label1: 'key1',
    label2: 'key2',
  }
  const values = [{
    keyId: 1,
    key1: 'key1value',
    key2: 'key2value',
  }, {
    keyId: 2,
    key1: 'key11value',
    key2: 'key22value',
  }]
  // @ts-expect-error 能正常运行..ts就是报错,用法也没问题. https://test-utils.vuejs.org/api/#props
  const wrapper = mount(SnTable, {
    props: {
      columns, values,
    },
  })

  test('renders table headers properly', () => {
    expect(wrapper.find('thead tr').text()).toEqual('label1label2')
  })

  test('renders table rows and cells properly', () => {
    const tbodyRows = wrapper.findAll('tbody tr')
    expect(tbodyRows.length).toBe(2)

    const firstRow = tbodyRows[0]
    expect(firstRow.text()).toContain('key1value')
    expect(firstRow.text()).toContain('key2value')

    const secondRow = tbodyRows[1]
    expect(secondRow.text()).toContain('key11value')
    expect(secondRow.text()).toContain('key22value')
  })
})
