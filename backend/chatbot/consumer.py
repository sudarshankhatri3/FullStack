from channels.consumer import SyncConsumer,AsyncConsumer
from channels.exceptions import StopConsumer
from channels.db import database_sync_to_async

#create a class to handle the websocket
class MySyncHandler(SyncConsumer):

    #connect to the websocket
    def websocket_connect(self,event):
        print(f'sudarshan khatri',event)
        self.send({
            'type':'websocket.accept'
        })


    # receive the message
    def websocket_receive(self,event):
        print(f'message receiver',event)
        print(f'Message:{event['text']}')
        self.send({
            'type':'websocket.send',
            'text':'Message send to client'
        })
    

    #disconnect the connection
    def websocket_disconnect(self,event):
        print(f'Server disconnect',event)
        raise StopConsumer
    


#create a class to handle async websocket
class MyAsyncHandler(AsyncConsumer):
    #connect websocket
    async def websocket_connect(self,event):
        print('websocket connect ....',event)
        await self.send({
            'type':'websocket.accept'
        })
    
    #receive the message 
    async def websocket_receive(self,event):
        print('websocket receiverd',event['text'])
        await self.send({
            'type':'websocket.send',
            'text':'message send to client'
        })

    #disconnect websocket 
    async def websocket_disconnect(self,event):
        print(f'websocket disconnect',event)
        raise StopConsumer
    