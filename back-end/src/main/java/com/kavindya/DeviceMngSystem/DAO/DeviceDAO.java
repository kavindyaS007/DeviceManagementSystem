package com.kavindya.DeviceMngSystem.DAO;
import com.kavindya.DeviceMngSystem.Model.Device;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeviceDAO extends JpaRepository<Device, Integer> {

}
