import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, ConfigProvider, Group, Root, PanelHeaderSimple, PanelHeaderClose, CellButton, PanelHeaderBack, PanelHeaderButton, PanelHeaderSubmit, PanelHeaderContent, Avatar, Tabs, Search, TabsItem } from '@vkontakte/vkui';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import vkBridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';



class Example extends React.Component {

    constructor() {
      this.state = {
        activePanel: 'list'
      };
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="list">
            <PanelHeader>
              Cell
            </PanelHeader>
            
            <Group header={<Header mode="secondary">Переходы</Header>}>
              <List>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Учетная запись</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Основные</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Приватность</Cell>
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

ReactDOM.render(<Example />, document.getElementById('root'));