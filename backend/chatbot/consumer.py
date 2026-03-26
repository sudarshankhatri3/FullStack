from channels.consumer import SyncConsumer,AsyncConsumer
from channels.exceptions import StopConsumer


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
    

    #disconnect the connection
    def websocket_disconnect(self,event):
        print(f'Server disconnect',event)
        raise StopConsumer

    