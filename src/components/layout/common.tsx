import React from 'react'
import { Flex, Provider, defaultTheme, View } from '@adobe/react-spectrum'

import '../../styles/global.scss'
import { Sidebar } from './sidebar'

export function Common(props: React.PropsWithChildren<{}>) {
  return (
    <Provider theme={defaultTheme} isEmphasized>
      <View backgroundColor="static-white" height="100vh">
        <Flex direction={{ base: 'column', S: 'row' }}>
          <Sidebar />
          <View margin="size-200" flex="auto">
            {props.children}
          </View>
        </Flex>
      </View>
    </Provider>
  )
}
