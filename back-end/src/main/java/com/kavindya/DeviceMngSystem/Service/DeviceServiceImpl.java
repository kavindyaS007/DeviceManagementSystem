package com.kavindya.DeviceMngSystem.Service;

import com.kavindya.DeviceMngSystem.DAO.DeviceDAO;
import com.kavindya.DeviceMngSystem.Model.Device;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import  java.util.Optional;

@Service
public class DeviceServiceImpl implements DeviceService{
    @Autowired
    private DeviceDAO dao;

    @Override
    public String addDevice(Device device){
        dao.save(device);
        return "New device added";
    }

    @Override
    public List<Device> getAllDevices() {
        return dao.findAll();
    }

    @Override
    public Device getDevice(int device_id) {
        if(dao.existsById(device_id)){
            return dao.findById(device_id).get();
        }
        else{
            System.out.println("Id not exists");
            return null;
        }
    }

    @Override
    public String updateDevice(int device_id, Device device) {
        if(dao.existsById(device_id)){
            Device tempDevice = dao.getById(device_id);
            tempDevice.setDevice_name(device.getDevice_name());
            tempDevice.setDevice_model(device.getDevice_model());
            tempDevice.setDevice_status(device.getDevice_status());
            tempDevice.setEnrolled_time(device.getEnrolled_time());
            dao.save(tempDevice);
            return "Device "+device_id+" was updated successfully";
        }
        else{
            return "Given id not exists, update failed";
        }
    }

    @Override
    public String deleteDevice(int device_id) {
        if(dao.existsById(device_id)){
            dao.deleteById(device_id);
            return "Device "+device_id+" was deleted successfully";
        }
        else{
            return "Given id not exists, deletion failed";
        }
    }
}
