package com.programming.programmingchallenge.utils;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;
import java.util.ArrayList;

@Service
public class DummyUserDetails implements UserDetailsService{
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return new User("foo", "foo",
                new ArrayList<>());
    }
}
