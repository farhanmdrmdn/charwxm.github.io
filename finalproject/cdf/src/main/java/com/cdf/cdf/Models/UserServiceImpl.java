package Models;

import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService{
    private static Map<String, User> userRepo = new HashMap<>();

    @Override
    public void createUser(User new_user) {
        userRepo.put(new_user.getId(), new_user);
    }

    @Override
    public void updateUser(String id, User user) {
        userRepo.remove(id);
        user.setId(id);
        userRepo.put(id, user);
    }

    @Override
    public void deleteUser(String id) {
        userRepo.remove(id);
    }

    @Override
    public Collection<User> getUsers() {
        return userRepo.values();
    }
}
