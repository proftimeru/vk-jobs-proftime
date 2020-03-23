import React from 'react';
import { View, Panel, PanelHeader, Cell, Header, List, ANDROID, Group,  PanelHeaderButton } from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import '@vkontakte/vkui/dist/vkui.css';


class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'list'
      };
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="list">
            <PanelHeader>
              Вакансии
            </PanelHeader>
            
            <Group header={<Header mode="secondary">Разделы</Header>}>
              <List>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Разделы 1</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Разделы 2</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Разделы 3</Cell>
              </List>
            </Group>
            
            
           
            <Group header={<Header mode="secondary">Иконки</Header>}>
              <List>
                <Cell before={<Icon28InfoOutline />}>Информация</Cell>
                <Cell before={<Icon28ServicesOutline />}>Сервисы</Cell>
              </List>
            </Group>
            
          </Panel>
          <Panel id="nothing">
              <PanelHeader
                left={
                  <PanelHeaderButton onClick={() => this.setState({ activePanel: 'list' })}>
                    {ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
                  </PanelHeaderButton>
                }
              >
                Ничего
              </PanelHeader>
            <div
              style={{
                padding: '100px 0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  color: 'gray',
                  textAlign: 'center'
                }}
              >
                Тут ничего нет<br />
                <span onClick={() => this.setState({ activePanel: 'list' })} style={{ textDecoration: 'underline' }}>Пошли обратно</span>
              </div>
            </div>
          </Panel>
        </View>
      )
    }
  }



export default Example;
