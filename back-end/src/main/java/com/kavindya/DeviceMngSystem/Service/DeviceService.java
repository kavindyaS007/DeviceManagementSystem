package com.kavindya.DeviceMngSystem.Service;

import com.kavindya.DeviceMngSystem.DAO.DeviceDAO;
import com.kavindya.DeviceMngSystem.Model.Device;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceService {
    @Autowired
    private DeviceDAO dao;

    public String addDevice(Device device){
        dao.save(device);
        return "New device added";
    }

    public List<Device> getAllDevices() {
        return dao.findAll();
    }

    public Device getDevice(int device_id) {
        //return dao.getById(device_id);
        return dao.findById(device_id).get();
    }


    public String updateDevice(int device_id, Device device) {
        if(dao.existsById(device_id)){
            Device tempDevice = dao.getById(device_id);
            tempDevice.setDevice_name(device.getDevice_name());
            tempDevice.setDevice_model(device.getDevice_model());
            tempDevice.setDevice_status(device.getDevice_status());
            tempDevice.setEnrolled_time(device.getEnrolled_time());
            dao.save(tempDevice);
            return device_id+"th device updated successfully";
        }
        return "update failed";
    }

    public String deleteDevice(int device_id) {
        if(dao.existsById(device_id)){
            dao.deleteById(device_id);
            return device_id+"th device deleted";
        }
        return "deletion unsuccessful";
    }
}
