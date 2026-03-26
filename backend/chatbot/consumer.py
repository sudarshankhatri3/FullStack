from channels.consumer import SyncConsumer


#create a class to handle the websocket
class MySyncHandler(SyncConsumer):

    #connect to the websocket
    def websocket_connect(self,event):
        print(f'sudarshan khatri')


    # receive the message
    def websocket_receive(self,event):
        print(f'message receiver')
    

    #disconnect the connection
    def websocket_disconnect(self,event):
        print(f'Server disconnect')

    