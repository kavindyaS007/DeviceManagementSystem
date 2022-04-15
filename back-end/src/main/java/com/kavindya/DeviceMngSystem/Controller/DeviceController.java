package com.kavindya.DeviceMngSystem.Controller;

import com.kavindya.DeviceMngSystem.Model.Device;
import com.kavindya.DeviceMngSystem.Service.DeviceService;
import com.kavindya.DeviceMngSystem.Service.DeviceServiceOld;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DeviceController {
    @Autowired
    private DeviceService deviceService;

    @PostMapping("/add-device")
    public String addDevice(@RequestBody Device device){
        return deviceService.addDevice(device);
    }

    @GetMapping("/all-devices")
    public List<Device> getAllDevices(){
        return deviceService.getAllDevices();
    }

    @GetMapping("/all-devices/{device_id}")
    public Device getDeviceById(@PathVariable int device_id){
        return deviceService.getDevice(device_id);
    }

    @PutMapping("/edit-device/{device_id}")
    public String editDevice(@RequestBody Device device,@PathVariable int device_id){
        return deviceService.updateDevice(device_id, device);
    }

    @DeleteMapping("/delete-device/{device_id}")
    public String deleteDevice(@PathVariable int device_id){
        return deviceService.deleteDevice(device_id);
    }
}
