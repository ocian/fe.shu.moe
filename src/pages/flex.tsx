import {
  Divider,
  Flex,
  Link,
  Radio,
  RadioGroup,
  Text,
  View,
} from '@adobe/react-spectrum'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import { Layout } from '../components'

ReactDOM.render(
  <Layout.Common>
    <Index />
  </Layout.Common>,
  document.querySelector('#root')
)

type TypeDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type TypeJustifyContent =
  | 'start'
  | 'end'
  | 'center'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
type TypeAlignItems =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'self-start'
  | 'self-end'

function Index() {
  const [direction, setDirection] = useState<TypeDirection>('row')
  const changeDirection = (value: TypeDirection) => setDirection(value)

  const [justifyContent, setJustifyContent] =
    useState<TypeJustifyContent>('start')
  const changeJustifyContent = (value: TypeJustifyContent) =>
    setJustifyContent(value)

  const [alignItems, setAlignItems] = useState<TypeAlignItems>('start')
  const changeAlignItems = (value: TypeAlignItems) => setAlignItems(value)

  const [flexs, setFlexs] = useState('0')

  const [order, setOrder] = useState('0')

  const [gap, setGap] = useState('size-25')

  return (
    <View>
      <View marginBottom="size-100">flex</View>
      <View flex="1" borderWidth="thin" borderColor="gray-900">
        <Flex
          gap={gap}
          margin="size-25"
          direction={direction}
          justifyContent={justifyContent}
          alignItems={alignItems}
          height="size-1000"
        >
          <View
            flex={['1', '0 20px', '0 20px'][+flexs]}
            backgroundColor="yellow-400"
          >
            1
          </View>
          <View
            flex={['2', '0 100px', '0 100px'][+flexs]}
            backgroundColor="blue-400"
            order={+order}
          >
            22
          </View>
          <View
            flex={['4', '0 100px', 'auto'][+flexs]}
            backgroundColor="green-400"
          >
            3333
          </View>
        </Flex>
      </View>
      <View marginTop="size-250">
        <RadioGroup label="子元素 flex 设置" value={flexs} onChange={setFlexs}>
          <Radio value="0">
            <Flex gap="size-100">
              <Text>1</Text>
              <Divider orientation="vertical" size="S" />
              <Text>2</Text>
              <Divider orientation="vertical" size="S" />
              <Text>4</Text>
            </Flex>
          </Radio>
          <Radio value="1">
            <Flex gap="size-100">
              <Text>0 20px</Text>
              <Divider orientation="vertical" size="S" />
              <Text>0 100px</Text>
              <Divider orientation="vertical" size="S" />
              <Text>0 100px</Text>
            </Flex>
          </Radio>
          <Radio value="2">
            <Flex gap="size-100">
              <Text>0 20px</Text>
              <Divider orientation="vertical" size="S" />
              <Text>0 100px</Text>
              <Divider orientation="vertical" size="S" />
              <Text>auto</Text>
            </Flex>
          </Radio>
        </RadioGroup>
        <Divider size="M" margin="size-100" />
        <RadioGroup
          label="direction"
          value={direction}
          onChange={changeDirection}
          orientation="horizontal"
        >
          {['row', 'column', 'row-reverse', 'column-reverse'].map((key) => (
            <Radio key={key} value={key}>
              {key}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="justify-content 主轴"
          value={justifyContent}
          onChange={changeJustifyContent}
          orientation="horizontal"
        >
          {[
            'start',
            'end',
            'center',
            'left',
            'right',
            'space-between',
            'space-around',
            'space-evenly',
            'stretch',
            'baseline',
            'first baseline',
            'last baseline',
            'safe center',
            'unsafe center',
          ].map((key) => (
            <Radio key={key} value={key}>
              {key}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="align-items 交叉轴"
          value={alignItems}
          onChange={changeAlignItems}
          orientation="horizontal"
        >
          {[
            'start',
            'end',
            'center',
            'stretch',
            'baseline',
            'first baseline',
            'last baseline',
            'safe center',
            'unsafe center',
            'self-start',
            'self-end',
          ].map((key) => (
            <Radio key={key} value={key}>
              {key}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label="gap 子元素间隔大小"
          orientation="horizontal"
          value={gap}
          onChange={setGap}
        >
          {['size-25', 'size-100', 'size-300'].map((key) => (
            <Radio key={key} value={key}>
              {key}
            </Radio>
          ))}
        </RadioGroup>
        <Divider size="M" margin="size-100" />
        <RadioGroup
          label="第二个元素的 order"
          value={order}
          onChange={setOrder}
          orientation="horizontal"
        >
          {['-1', '0', '1'].map((key) => (
            <Radio key={key} value={key}>
              {key}
            </Radio>
          ))}
        </RadioGroup>
      </View>
      <Divider size="M" margin="size-100" />
      <View>
        我大概用不到的东西：
        <Link>
          <a
            href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-shrink"
            target="_blank"
          >
            flex-shrink 收缩属性
          </a>
        </Link>
      </View>
    </View>
  )
}
