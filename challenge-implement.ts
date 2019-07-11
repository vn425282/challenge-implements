import ShipmentSearchIndex from './shipmentSearchIndex';

class ShipmentService extends ShipmentSearchIndex implements ShipmentUpdateListenerInterface {
  async receiveUpdate(id: string, shipmentData: any): Promise<any> {
    await this.updateShipment(id, shipmentData)
  }
}


