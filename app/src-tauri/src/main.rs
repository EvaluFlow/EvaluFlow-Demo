// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    println!("Hello from jsx");
    return format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn greett(username: &str, password: &str) -> String {
    println!("Hello from jsx (tt)");
    if username == "admin" && password == "admin" {
        return "Hello admin".to_string();
    }
    return format!("Hello, {}! Seems like you don't have an account! You can set one up by going to evaluflow.com/signup", username)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, greett])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
