package com.kavindya.DeviceMngSystem.Service;
import com.kavindya.DeviceMngSystem.Model.Device;
import java.util.List;
import java.util.Optional;

public interface DeviceService {

    String addDevice(Device device);

    List<Device> getAllDevices();

    Device getDevice(int device_id);

    String updateDevice(int device_id, Device device);

    String deleteDevice(int device_id);

}
