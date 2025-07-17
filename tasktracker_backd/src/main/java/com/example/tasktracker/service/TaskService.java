package com.example.tasktracker.service;

import com.example.tasktracker.model.Task;
import com.example.tasktracker.model.User;
import com.example.tasktracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public List<Task> getTasksForUser(User user) {
        return taskRepository.findByUser(user);
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
}