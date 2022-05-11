package main

import "fmt"

func main() {

	// m := make(map[string]string)
	// m["hoge"] = "hoge"
	// describe(m)
	// m["hoge"] = "fuga"
	// describe(m)
	// m["fuga"] = "fuga"
	// describe(m)

	// どっかに、mapがあって、それを参照している感じっぽくみえる
	kv := map[string]string{
		"foo": "bar",
	}
	describe(kv)
	kv["foo"] = "hoge"
	describe(kv)

}

func describe(i interface{}) {
	// 最初がiが参照するやつのポインタ、次がインスタンスであるiのポインタ
	fmt.Printf("(%v, %T, %p, %p)\n", i, i, i, &i)
}
