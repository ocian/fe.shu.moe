import { Item, ListBox, View } from '@adobe/react-spectrum'
import * as configs from '../../config'

export function Sidebar() {
  function changeSelection(key: Set<string>) {
    const path = Array.from(key)[0]
    if (path && location.pathname !== path) window.location.href = path
  }

  return (
    <View
      width={{ base: 'auto', S: 'size-2400' }}
      height={{ base: 'auto', S: '100vh' }}
      backgroundColor="gray-100"
    >
      <ListBox
        items={configs.pages}
        margin="size-200"
        selectionMode="single"
        onSelectionChange={changeSelection}
      >
        {(item) => <Item key={item.path}>{item.label}</Item>}
      </ListBox>
    </View>
  )
}
